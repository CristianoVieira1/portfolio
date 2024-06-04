import * as S from './styles'

export interface IWorkHistoryItem {
  id: number
  image: string
  company: string
  position: string
  period: string
  description: string
  tagOne?: string
  tagTwo?: string
  freelancer?: boolean
}

const WorkExperience = ({
  id,
  company,
  position,
  period,
  description,
  tagOne,
  tagTwo,
  freelancer,
  image
}: IWorkHistoryItem) => {
  return (
    <S.CardsItem className="col-12 col-md-6 grid-item animate-card-2" key={id}>
      <S.CardsCard className=" d-flex flex-column">
        <div className="cards__descr">
          <h4 className="cards__title animate-in-up">{position}</h4>
          <p className="small cards__text animate-in-up">
            {company}
            &nbsp;&nbsp;&nbsp;
            {period}
          </p>
          <div className="cards__tags d-flex flex-wrap animate-in-up">
            <span className="rounded-tag tag-outline">{tagOne}</span>
            <span className="rounded-tag tag-outline">{tagTwo}</span>
            {freelancer ?? <span className="rounded-tag tag-outline">Freelancer</span>}
          </div>
          <S.Description className="animate-in-up"> {description}</S.Description>
        </div>
        <div className="cards__image d-flex animate-in-up">
          <img src={image} alt="Empresas trabalhadas" />
        </div>
      </S.CardsCard>
    </S.CardsItem>
  )
}

export default WorkExperience
