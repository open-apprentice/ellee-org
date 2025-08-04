'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  P,
  Section,
  H2,
  H3,
  SpanGradient,
  LI,
} from '@/components/HTMLTags';
import SectionHeading from '../SectionHeading';

function ContentSwitcher({ option1, option2, option3, className }) {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <SectionHeading
        label='Making Content Choices'
        description='Choose on of these options. A generic non-adapted version is on the left. On the right is a smart and tailored adaptation, it is an example of adaptive content in practice. The light grey text is content that is unchanged between adaptations.'
        subsection=''
        title='See an example of Adaptive Content in action'
      >
        <div>
          <label>Select an option:</label>
          <div>
            <label>
              <input
                type='radio'
                value='option1'
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
              />
              {option1}
            </label>
          </div>
          <div>
            <label>
              <input
                type='radio'
                value='option2'
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
              {option2}
            </label>
          </div>
          <div>
            <label>
              <input
                type='radio'
                value='option3'
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
              />
              {option3}
            </label>
          </div>
        </div>
      </SectionHeading>

      <Section className='flex mb-10'>
        <div className='hidden lg:flex items-center justify-center flex-1'>
          <div className='max-w-md text-left'>
            <SpanGradient>
              Generic non-adapted content version
            </SpanGradient>
            <H3>What is inflation to you?</H3>
            <P>
              Inflation is an increase in the prices of everyday
              things over time. Imagine if you went to a store with
              $10 today and bought a toy. That toy might cost you $10
              today, but a few years from now, it might cost more,
              like $12.
            </P>

            <P>
              <strong>More Money, Same Stuff:</strong> The primary
              cause of inflation is that there is more money being
              added into the economy. This is when the government (or
              Central Bank) prints more money. If there's the same
              amount of stuff (goods and services) to buy, but more
              money chasing after it, prices tend to go up.
            </P>

            <P>
              You'll notice that the cost of sourcing raw materials
              rises over time. As prices for the raw materials
              increase and skilled labor increase, the overall sticker
              cost becomes pricier.
            </P>

            <P>
              Inflation is measured as a percentage, like 2% or 3% per
              year. Central banks, like the Federal Reserve in the
              United States, try to keep inflation stable and not too
              high, usually around 2%. Too much inflation can be a
              problem because it makes it harder for people to plan
              for the future, and inflation erodes the value of money.
            </P>
          </div>
        </div>

        <div className='w-full bg-gray-10 lg:w-1/2 flex items-center justify-center'>
          <div className='max-w-md w-full'>
            {selectedOption === 'option1' && (
              <div>
                <SpanGradient>
                  Modern Adapted Content to a: {option1}
                </SpanGradient>
                <H3>What is inflation to a {option1}</H3>

                <P>
                  Imagine you're a chef running a restaurant.
                  Inflation in the culinary world shows itself in the
                  gradual increase of the cost of ingredients over
                  time. It's when you watch the prices of your
                  ingredients climb year after year.
                </P>

                <P className={cn('text-neutral-500', className)}>
                  <strong>More Money, Same Stuff:</strong> The primary
                  cause of inflation is that there is more money being
                  added into the economy. This is when the government
                  (or Central Bank) prints more money. If there's the
                  same amount of stuff (goods and services) to buy,
                  but more money chasing after it, prices tend to go
                  up.
                </P>

                <P>
                  You'll notice that the cost of sourcing needed
                  ingredients rises over time. As prices for gourmet
                  ingredients and skilled labor increase, the overall
                  dining experience at your restaurant becomes
                  pricier.
                </P>

                <P className={cn('text-neutral-500', className)}>
                  Inflation is measured as a percentage, like 2% or 3%
                  per year. Central banks, like the Federal Reserve in
                  the United States, try to keep inflation stable and
                  not too high, usually around 2%. Too much inflation
                  can be a problem because it makes it harder for
                  people to plan for the future, and inflation erodes
                  the value of money.
                </P>
              </div>
            )}

            {selectedOption === 'option2' && (
              <div>
                <SpanGradient>
                  Modern Adapted Content to a: {option2}
                </SpanGradient>
                <H3>What is inflation to a {option2}</H3>
                <p>This is the content for option 2.</p>
              </div>
            )}

            {selectedOption === 'option3' && (
              <div>
                <SpanGradient>
                  Modern Adapted Content to a: {option3}
                </SpanGradient>
                <H3>What is inflation to a {option3}</H3>
                <p>This is the content for option 3.</p>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

export default ContentSwitcher;
