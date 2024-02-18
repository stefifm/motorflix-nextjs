import SearchResult from '@/app/ui/SearchResult'

export default function SearchPage ({
  searchParams
}: {
  searchParams?: {
    q?: string
  }
}): JSX.Element {
  const query = searchParams?.q ?? ''

  return (
    <SearchResult query={query} />
  )
}
