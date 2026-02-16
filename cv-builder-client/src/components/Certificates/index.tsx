import type { CvData } from '../../types';
import CertificatesDisplay from './CertificatesDisplay';

interface Props {
  cvData: CvData | null;
}

const Certificates = ({ cvData }: Props) => {
  const certificates = cvData?.certificates; // Extract the certificates info

  return certificates ? (
    <CertificatesDisplay certificates={certificates} />
  ) : (
    <div>...loading Certificates</div>
  );
};

export default Certificates;
