'use client'

import React, {
  startTransition,
  useEffect,
  useState,
  useTransition,
} from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import {
  redirect,
  useParams,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { FormError } from '@/components/auth/form-error'
import { FormSuccess } from '@/components/auth/form-success'

import OtpInput from '../../../../../components/auth/otp-input'
import { Button } from '@/components/ui/button'
import { activation } from '@/lib/actions/auth/register'
import { reactivate } from '@/lib/actions/auth/reactivate'
import { toast } from 'sonner'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

type FormData = {
  otp: string
}

export default function OtpForm({ params }: { params: { phone: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const pass = searchParams.get('pass')
  // console.log(params.phone)
  const [sentSms, setSentSms] = useState(false)
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      otp: '',
    },
  })
  // useEffect(() => {
  //   const sendReactiveSms = async () => {
  //     const Sms = await sendSms({ phone: params.phone })
  //     console.log(Sms)
  //   }
  //   sendReactiveSms()
  // }, [params.phone])
  if (!params.phone || !pass) return
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError('')
    setSuccess('')

    // setError(res?.error)
    // setSuccess(res?.success)
    startTransition(() => {
      activation({
        phone: params.phone,
        verificationCode: data.otp,
        password: pass,
      }).then((res) => {
        setError(res.error)
        setSuccess(res.success)
        if (res.success) {
          toast('اکانت شما با موفقیت فعال شد، وارد حساب کاربری خود شوید!')
          router.push('/login')
        }
        if (res.error) {
          reset()
        }
      })
    })

    // console.log(data) // Handle form submission
    // const res = await activation({ id: userID, verificationCode: data.otp })
    // console.log(res)
  }
  const smsSend = async () => {
    setError('')
    setSuccess('')

    // setError(res?.error)
    // setSuccess(res?.success)
    startTransition(() => {
      reactivate({ phone: params.phone })
        .then((res) => {
          setError(res.error)
          setSuccess(res.success)
          if (res.error === 'حساب شما فعال است!') {
            router.push('/')
          }
          if (res.success) {
            setSentSms(true)
          }
        })
        .catch(() => {})
    })

    // console.log(data) // Handle form submission
    // const res = await activation({ id: userID, verificationCode: data.otp })
    // console.log(res)
  }

  // Function to trigger form submission programmatically
  const handleComplete = () => {
    handleSubmit(onSubmit)() // Invoke the submit handler
  }

  return (
    <>
      {sentSms ? (
        <form dir="ltr" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-semibold text-sm md:text-2xl text-secondary mb-8 text-center">
            :لطفا کد ارسال شده را وارد کنید
          </h1>
          <Controller
            control={control}
            name="otp"
            render={({ field: { onChange, value } }) => (
              <OtpInput
                disabled={isPending}
                value={value}
                valueLength={6}
                onChange={onChange}
                onComplete={handleComplete} // Pass the handleComplete function
              />
            )}
          />
          <section
            dir="ltr"
            className="flex flex-col justify-center items-center my-8"
          >
            <CountdownCircleTimer
              isPlaying
              duration={120}
              colors={['#ADD8E6', '#30e8bf', '#FFB6C1', '#e96f18']}
              colorsTime={[120, 60, 30, 15]}
              size={60}
              strokeWidth={10}
              onComplete={() => router.push('/login')}
              strokeLinecap={'butt'}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
            <p className="text-xs md:text-sm text-blue-600 text-center pt-2 pb-8">
              مدت اعتبار دو دقیقه
            </p>
          </section>
          <FormError message={error} />
          <FormSuccess message={success} />
        </form>
      ) : (
        <Card className="gradient-base text-secondary">
          <form
            className="w-full h-full flex flex-col items-center justify-center gap-6"
            onSubmit={handleSubmit(smsSend)}
          >
            <CardHeader>
              <p className="text-xl font-semibold">ارسال کد تایید به شماره</p>
            </CardHeader>
            <CardContent>{params.phone}</CardContent>
            <CardFooter>
              <Button variant={'destructive'} type="submit">
                تایید
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </>
  )
}
