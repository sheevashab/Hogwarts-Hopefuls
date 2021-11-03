import { Link } from "react-router-dom";

export default function Letter() {
  return (
    <>
      <p>
        Dear ****Hermione’s Twin******,<br />
        We are pleased to inform you that you have been accepted to Hogwarts School of Witchcraft and Wizardry.
        We very much look forward to receiving you as part of the new generation of Hogwarts.<br />
        Yours Sincerely,<br />
        Minerva McGonagall<br />
        As with most years at this school, something is amiss. As such, we will be sorting you before your arrival on the Hogwarts Express. Please click your wand on the magical link below to connect your body and spirit to the Sorting Hat.
      </p>
      <button>
        <Link to='/sorting'>Sorting Hat Picture</Link>
      </button>
    </>
  )
}
