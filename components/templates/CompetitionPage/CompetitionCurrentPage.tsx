'use client'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUnit } from 'effector-react'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'
import {
  $currentCompetition,
  loadOneCompetition,
  loadOneCompetitionFx,
} from '@/context/competition-current'
import { ICompetitionPageProps } from '@/types/item-page'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import { useLang } from '@/hooks/useLang'
import CompetitionPageContent from '@/components/modules/CompetitionPage/CompetitionPageContent'
import styles from '@/styles/competition/index.module.scss'

const CompetitionPage = ({ id }: ICompetitionPageProps) => {
  const competition = useUnit($currentCompetition)
  const competitionSpinner = useUnit(loadOneCompetitionFx.pending)
  const { breadcrumbs } = useBreadcrumbs('Актуальные конкурсы')
  usePageTitle(competition.status, competition.name)
  const { translations } = useLang()

  useEffect(() => {
    loadOneCompetition({ id })
  }, [])

  useEffect(() => {
    if (breadcrumbs) {
      const lastCrumb =
        breadcrumbs.children[breadcrumbs.children.length - 1].children[0]

      breadcrumbs.children[
        breadcrumbs.children.length - 2
      ].children[0].textContent = (
        translations['ru'].breadcrumbs as {
          [index: string]: string
        }
      )['competition-' + competition.status]

      lastCrumb.textContent = competitionSpinner
        ? translations['ru'].common.loading
        : competition.name
    }
  }, [
    breadcrumbs,
    competition.status,
    competition.name,
    competitionSpinner,
    translations,
  ])

  if (competition?.errorMessage) {
    notFound()
  }

  return (
    <div className={styles.competition}>
      {competitionSpinner ? (
        <div className={styles.competition__preloader}>
          <FontAwesomeIcon icon={faSpinner} size='8x' />
        </div>
      ) : (
        competition.name && <CompetitionPageContent />
      )}
    </div>
  )
}
export default CompetitionPage
