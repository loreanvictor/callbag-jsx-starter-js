import { expr, filter, interval, map } from 'callbag-common'
import { makeRenderer } from 'callbag-jsx'
import { state } from 'callbag-state'


const renderer = makeRenderer()
const name = state('World')
const timer = interval(1000)


const format = n => n[0].toUpperCase() + n.substr(1)
const displayName = name |> filter(n => n.length > 0) |> map(format)

renderer.render(
  <>
    <div>Hola {displayName}!</div>
    <input _state={name} type='text' placeholder='name ...'/>

    <br/><br/>

    <div><small>You have been here for {expr($ => $(timer, -1) + 1)} seconds!</small></div>
  </>
).on(document.body)
