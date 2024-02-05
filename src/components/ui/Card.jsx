const Card = ({ title, children, hasTitle = true }) => {
  return (
    <div className='shadow-md px-10 py-5 bg-white bg-opacity-90 rounded-md'>
      <div className='flex flex-col gap-2'>
        {hasTitle && <h3 className='text-sky-500'>{title}</h3>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
