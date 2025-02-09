import React from 'react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Daily limitation',
        'Basic AI summaries',
        'Export to text',
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Premium',
      price: '$5',
      period: 'per month',
      features: [
        'Unlimited transcription per month',
        'Advanced AI insights',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per organization',
      features: [
        'Unlimited transcription',
        'Custom AI models',
        'API access',
        'SSO integration',
        'Dedicated support',
        'Custom features'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Choose Your Plan</h1>
        <p className="text-xl text-gray-400">
          Start free and upgrade as you grow
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg p-8 ${
              plan.highlighted
                ? 'bg-blue-900/50 border-2 border-blue-500 shadow-lg'
                : 'bg-gray-900/50 border border-gray-700'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">{plan.name}</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-gray-400">/{plan.period}</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold ${
                plan.highlighted
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PricingPage;