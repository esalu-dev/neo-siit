import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { SheetClose } from './ui/sheet'

export function NavButton ({
  href,
  title,
  icon
}: {
  href: string
  title: string
  icon: React.ReactNode
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={buttonVariants({
          variant: 'ghost',
          size: 'lg'
        })}
      >
        {icon}
        {title}
      </Link>
    </SheetClose>
  )
}
