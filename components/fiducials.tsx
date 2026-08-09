function FiducialMark({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="6" fill="none" stroke="#20242B" strokeWidth="1.4" />
      <path d="M10 0v6M10 14v6M0 10h6M14 10h6" stroke="#20242B" strokeWidth="1.4" />
    </svg>
  );
}

export function Fiducials() {
  return (
    <>
      <FiducialMark className="fid fid-tr" />
      <FiducialMark className="fid fid-bl" />
    </>
  );
}
