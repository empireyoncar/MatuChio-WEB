import NewsSection from './_components/(sections)/(Section2MainAndRankings)/News'

export default function Home({searchParams} : {searchParams: {page: number}}) {
  return (
    <>
      <NewsSection page={searchParams.page || 0}/>
    </>
  )
}
