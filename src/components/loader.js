import React from 'react'
const loader = () => {
  return (
    <div class="d-flex justify-content-center m-5 p-5">
      <div class="spinner-border p-2 m-2" role="status">
        <span class="visually-hidden pt-5 mt-5">Loading...</span>
      </div>
    </div>
  )
}
export default loader