export default function LogoutForm () {
    return(
        <div>
        <h1 className="font-bold">Are you sure you want to sign out?</h1>
        <Link to= "/" className={clsx(
            " p-2 rounded ",
            "flex h-8 justify-center items-center p-5 m-2 w-full",
            "bg-blue-700 text-white"
          )}>Yes, sign out</Link>
    </div>
    )
}