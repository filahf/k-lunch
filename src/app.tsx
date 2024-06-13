import { HtmlBackdrop } from './components/html-backdrop'
import { KLunchScene } from './components/klunch-scene'

export const App = () => {
  return (
    <>
      <HtmlBackdrop />
      <KLunchScene>{/* Place 3D content here */}</KLunchScene>
    </>
  )
}
