export const DefaultCover = () => {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div>
        <img
          className="w-40 h-40 rounded-full white-glow"
          src="src/assets/covers/default.png"
          alt="default cover"
        />
      </div>
      <div className="flex flex-col justify-center text-center">
        <h2>Any Song</h2>
        <p>Any Artist</p>
      </div>
    </div>
  )
}
