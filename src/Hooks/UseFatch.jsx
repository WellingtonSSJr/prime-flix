import React from 'react'

function UseFatch() {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const request =  React.useCallback(async (url, options) => {

        let response
        let json

        try {
            setError(null)
            setLoading(true)

            response = await fetch(url, options)
            json = await response.json()

            if(response.ok === false) throw new Error(json.Error)
            
        } catch (error) {
            json = null
            setError(error)
        }finally{
            setLoading(false)
            setData(json)
            return {response, json}
        }
    })



  return (
    {
        data,
        error,
        loading,
        request,
    }
  )
}

export default UseFatch