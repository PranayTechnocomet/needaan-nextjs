'use client'
import React, { useEffect, useState, use } from 'react'
import ChartBod from '@/components/ChartBod'

export default function Page({ params }) {
  // const [initialMessage, setInitialMessage] = useState(null)
  
  // // Unwrap the params Promise using React.use()
  // const resolvedParams = use(params)

  // useEffect(() => {
  //   // Get initial message from sessionStorage
  //   if (typeof window !== 'undefined') {
  //      const storedMessage = sessionStorage.getItem(`initial_message_${resolvedParams.id}`)
  //     if (storedMessage) {
  //       setInitialMessage(storedMessage)
  //       console.log("📨 123:", storedMessage)
  //       // Remove from sessionStorage after reading to prevent reuse
  //       sessionStorage.removeItem(`initial_message_${resolvedParams.id}`)
  //     }
  //   }
  // }, [resolvedParams.id])

  return (
    <div>
      <ChartBod  />
    </div>
  )
}
// 'use client'
// import React, { useEffect, useState, use } from 'react'
// import ChartBod from '@/components/ChartBod'

// export default function Page({ params }) {
//   const [initialMessage, setInitialMessage] = useState(null)
  
//   // Unwrap the params Promise using React.use()
//   const resolvedParams = use(params)

//   useEffect(() => {
//     // Get initial message from sessionStorage
//     if (typeof window !== 'undefined') {
//        const storedMessage = sessionStorage.getItem(`initial_message_${resolvedParams.id}`)
//       if (storedMessage) {
//         setInitialMessage(storedMessage)
//         console.log("📨 123:", storedMessage)
//         // Remove from sessionStorage after reading to prevent reuse
//         sessionStorage.removeItem(`initial_message_${resolvedParams.id}`)
//       }
//     }
//   }, [resolvedParams.id])

//   return (
//     <div>
//       <ChartBod sessionId={resolvedParams.id} initialMessage={initialMessage} />
//     </div>
//   )
// }
