import React from 'react';
import { useParams } from 'react-router-dom';

interface ManifestLinkProps {
  className?: string;
}

const ManifestLink: React.FC<ManifestLinkProps> = ({ className = '' }) => {
  const { lang } = useParams<{ lang: string }>();
  
  // Use locale-specific manifest if available, fallback to root
  const manifestPath = lang && ['en', 'ar'].includes(lang) 
    ? `/${lang}/manifest.json` 
    : '/manifest.json';

  return (
    <link 
      rel="manifest" 
      href={manifestPath}
      className={className}
    />
  );
};

export default ManifestLink;
