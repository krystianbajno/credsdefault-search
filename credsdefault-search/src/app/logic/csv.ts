import { Credential } from "../interfaces/credential";

export const downloadCredentialCsv = (filteredCredentials: Credential[]) => {
    if (filteredCredentials.length === 0) {
      alert('No data to download');
      return;
    }

    const headers = [
      'Manufacturer', 
      'Model', 
      'Version', 
      'Role', 
      'Login', 
      'Password', 
      'Method', 
      'Source', 
      'Comment', 
      'Port', 
      'Address'
    ];

    const escapeCsvField = (field: string) => {
      if (field.includes('"') || field.includes(',') || field.includes('\n')) {
        return `"${field.replace(/"/g, '""')}"`;
      }
      return field;
    };

    const csvContent = [
      headers.join(','),
      ...filteredCredentials.map(cred => [
        escapeCsvField(cred.manufacturer),
        escapeCsvField(cred.model),
        escapeCsvField(cred.version),
        escapeCsvField(cred.role),
        escapeCsvField(cred.login),
        escapeCsvField(cred.password),
        escapeCsvField(cred.method),
        escapeCsvField(cred.source),
        escapeCsvField(cred.comment),
        escapeCsvField(cred.port),
        escapeCsvField(cred.address)
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const reader = new FileReader();
    reader.onload = (e) => {
      const link = document.createElement('a');
      link.href = e.target?.result as string;
      link.download = 'filtered_credentials.csv';
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    reader.readAsDataURL(blob);
  };