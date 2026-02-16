import type { CertificateEntry } from '../../types';

interface Props {
  certificates: CertificateEntry[];
}

const CertificatesDisplay = ({ certificates }: Props) => {
  const visibleItems = certificates?.filter((item) => item.isVisible); // Filter just for the Visible ones
  return (
    <div>
      <h2>CERTIFICATES</h2>
      <hr />
      {visibleItems.map((cert) => (
        <p key={cert._id}>
          <span>
            <strong>{cert.name}</strong>| {cert.issueDate}
          </span>
        </p>
      ))}
    </div>
  );
};

export default CertificatesDisplay;
