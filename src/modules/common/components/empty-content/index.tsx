const EmptyContent = ({ text }: { text: string }) => {
  return (
    <div className="tw-py-32 tw-px-4 lg:tw-px-16 ">
      <div role="alert" className="tw-alert tw-alert-success !tw-bg-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="tw-stroke-current tw-text-white tw-shrink-0 tw-w-6 tw-h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="tw-text-white tw-font-medium">{text}</span>
      </div>
    </div>
  );
};

export default EmptyContent;
