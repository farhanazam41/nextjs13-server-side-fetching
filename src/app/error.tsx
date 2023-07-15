'use client'
import React from 'react'

interface ErrorFallBackProp {
    error: Error;
    reset: () => void
}

export default function ErrorFallBack(props : ErrorFallBackProp) {
    const { error, reset } = props;
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={reset}>Try again</button>
      </div>
  )
}
