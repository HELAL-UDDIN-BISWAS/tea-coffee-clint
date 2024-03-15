import { Skeleton } from 'keep-react'

export const SkeletonComponent = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <Skeleton.Line className="h-4 w-full" />
      <Skeleton.Line className="h-4 w-full" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-10 w-4/6" />
    </Skeleton>
  )
}