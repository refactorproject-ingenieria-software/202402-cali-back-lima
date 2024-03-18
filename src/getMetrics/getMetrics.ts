import axios from 'axios';

export const getMetrics = async () => {
  const token = '';

  try {
    const { data } = await axios.get(
      'https://sonarcloud.io/api/measures/component?metricKeys=ncloc%2Ccode_smells%2Ccomplexity&component=refactorproject-ingenieria-software_202402-cali-back-lima',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return data;
  } catch (error) {
    throw error;
  }
};
