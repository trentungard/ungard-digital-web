import { isValid, parseISO, format } from 'date-fns'

interface DateCompProps {
  className?: string;
  dateString?: string;
}

export const DateComp = ({ className, dateString }: DateCompProps) => {
  // if (!isValid(parseISO(dateString))) {
  //   return 'No date'
  // }
  const date = parseISO(dateString)
  return <time className={className} dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
