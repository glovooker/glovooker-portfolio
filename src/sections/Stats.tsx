import { FC } from 'react';
import { useTranslation } from 'react-i18next';
const Stats: FC = () => {
  const { t } = useTranslation('stats');

  const stats: { label: string; value: number }[] = [
    {
      label: `${t('stats_1')}`,
      value: 30,
    },
    {
      label: `${t('stats_2')}`,
      value: 700,
    },
    {
      label: `${t('stats_3')}`,
      value: 25,
    },
    {
      label: `${t('stats_4')}`,
      value: 40,
    },
  ];

  return (
    <section className='bg-white w-full'>
      <div className='container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center overflow-hidden'>
        {stats.map((stat) => {
          return (
            <div key={stat.label}>
              <h5 className='text-5xl font-bold text-glovooker-chamoisee-100'>
                <span className='inline text-glovooker-chamoisee-100'>
                  {stat.value}
                </span>
                <span className='text-glovooker-chamoisee-100'>+</span>
              </h5>
              <p className='text-glovooker-chamoisee-100 tracking-wide text-xs font-medium uppercase'>
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Stats;
