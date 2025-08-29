'use client'
import { useFormState } from 'react-dom'
import { submitContact } from '@/app/contact/actions'

const initialState = { success: false, errors: {} as Record<string, string[]> }

export function ContactForm() {
  const [state, action] = useFormState(submitContact, initialState)
  return (
    <form action={action} className="mx-auto max-w-xl space-y-4">
      <input type="text" name="middleName" className="hidden" tabIndex={-1} />
      <div>
        <label className="block">Parent name</label>
        <input name="name" className="w-full rounded p-2 text-black" required />
        {state.errors?.name && (
          <p className="text-bp-danger">{state.errors.name}</p>
        )}
      </div>
      <div>
        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          className="w-full rounded p-2 text-black"
          required
        />
        {state.errors?.email && (
          <p className="text-bp-danger">{state.errors.email}</p>
        )}
      </div>
      <div>
        <label className="block">Phone</label>
        <input name="phone" className="w-full rounded p-2 text-black" />
      </div>
      <div>
        <label className="block">Child’s age</label>
        <input
          name="childAge"
          className="w-full rounded p-2 text-black"
          required
        />
      </div>
      <div>
        <label className="block">Preferred communication method</label>
        <input
          name="preferredMethod"
          className="w-full rounded p-2 text-black"
          required
        />
      </div>
      <div>
        <label className="block">Primary goals</label>
        <textarea
          name="goals"
          className="w-full rounded p-2 text-black"
          required
        ></textarea>
      </div>
      <div>
        <label className="block">How did you hear about us</label>
        <input name="referral" className="w-full rounded p-2 text-black" />
      </div>
      <div>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="consent" required />I consent to having
          this information stored.
        </label>
        {state.errors?.consent && (
          <p className="text-bp-danger">Consent required</p>
        )}
      </div>
      {state.success && (
        <p className="text-bp-success">Thank you! We will be in touch.</p>
      )}
      <button
        type="submit"
        className="rounded bg-bp-primary px-4 py-2 text-black"
      >
        Submit
      </button>
    </form>
  )
}
