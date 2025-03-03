import { Theme } from '@logto/schemas';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import CongratsDark from '@/assets/images/congrats-dark.svg?react';
import Congrats from '@/assets/images/congrats.svg?react';
import Card from '@/ds-components/Card';
import useTheme from '@/hooks/use-theme';

import styles from './index.module.scss';

function SocialDemoCallback() {
  const theme = useTheme();
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Social callback will have "code" in query params
    if (searchParams.get('code')) {
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        {theme === Theme.Light ? <Congrats /> : <CongratsDark />}
        <div className={styles.title}>{t('cloud.social_callback.title')}</div>
        <div className={styles.message}>{t('cloud.social_callback.description')}</div>
      </Card>
    </div>
  );
}

export default SocialDemoCallback;
