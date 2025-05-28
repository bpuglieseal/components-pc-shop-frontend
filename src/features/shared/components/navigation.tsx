import {FC, PropsWithChildren} from 'react'

type NavigationProps = PropsWithChildren<object>

export const NavigationProps: FC<NavigationProps> = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
