import React, { useRef, useEffect, useContext } from 'react'
import { CSSTransition as ReactCSSTransition } from 'react-transition-group'
import { CSSTransitionClassNames, CSSTransitionProps } from 'react-transition-group/CSSTransition'

const TransitionContext = React.createContext({
  parent: {},
})

function useIsInitialRender() {
  const isInitialRender = useRef(true)
  useEffect(() => {
    isInitialRender.current = false
  }, [])
  return isInitialRender.current
}

type TransitionProps = {
  show?: boolean
  children: React.ReactNode
  className: string
  enterStart?: string
  enterEnd?: string
  leave?: string
  leaveStart?: string
  leaveEnd?: string
  appear?: string
  unmountOnExit?: boolean | undefined
  tag?: any
} & CSSTransitionClassNames

function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}: TransitionProps) {
  const enterClasses = enter.split(' ').filter(s => s.length)
  const enterStartClasses = enterStart.split(' ').filter(s => s.length)
  const enterEndClasses = enterEnd.split(' ').filter(s => s.length)
  const leaveClasses = leave.split(' ').filter(s => s.length)
  const leaveStartClasses = leaveStart.split(' ').filter(s => s.length)
  const leaveEndClasses = leaveEnd.split(' ').filter(s => s.length)
  const removeFromDom = unmountOnExit

  function addClasses(node: Element, classes: string[]) {
    classes.length && node.classList.add(...classes)
  }

  function removeClasses(node: Element, classes: string[]) {
    classes.length && node.classList.remove(...classes)
  }

  const nodeRef = React.useRef(null)
  const Component = tag

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: () => void) => {
        // @ts-ignore
        nodeRef?.current?.addEventListener('transitionend', done, false)
      }}
      onEnter={() => {
        // @ts-ignore
        if (!removeFromDom) nodeRef.current.style.display = null
        // @ts-ignore
        addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses])
      }}
      onEntering={() => {
        // @ts-ignore
        removeClasses(nodeRef.current, enterStartClasses)
        // @ts-ignore
        addClasses(nodeRef.current, enterEndClasses)
      }}
      onEntered={() => {
        // @ts-ignore
        removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses])
      }}
      onExit={() => {
        // @ts-ignore
        addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses])
      }}
      onExiting={() => {
        // @ts-ignore
        removeClasses(nodeRef.current, leaveStartClasses)
        // @ts-ignore
        addClasses(nodeRef.current, leaveEndClasses)
      }}
      onExited={() => {
        // @ts-ignore
        removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses])
        // @ts-ignore
        if (!removeFromDom) nodeRef.current.style.display = 'none'
      }}>
      <Component ref={nodeRef} {...rest} style={{ display: !removeFromDom ? 'none' : null }}>
        {children}
      </Component>
    </ReactCSSTransition>
  )
}

export const Transition = ({ show, appear, ...rest }: TransitionProps) => {
  const { parent } = useContext(TransitionContext)
  const isInitialRender = useIsInitialRender()
  const isChild = show === undefined

  if (isChild) {
    // @ts-ignore
    return <CSSTransition appear={parent.appear || !parent.isInitialRender} show={parent.show} {...rest} />
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}>
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  )
}
