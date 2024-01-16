import Question from '@/components/forms/Question';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ask a Question | DevOverFlow',
};

const Page = async () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question </h1>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
};

export default Page;
