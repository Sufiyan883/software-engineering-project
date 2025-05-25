// Mock data for the electricity tracking system

// Customer profile data
export const customerProfile = {
  id: 'USR12345',
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: '123 Energy St, Powertown, PT 12345',
  meterID: 'MTR-98765',
  accountNumber: 'ACC-123456789',
  joinDate: '2022-03-15',
  planType: 'Residential Standard',
};

// Weather data
export const weatherData = {
  current: {
    condition: 'Sunny',
    temperature: 32,
    humidity: 45,
    windSpeed: 10,
    icon: '☀️',
  },
  forecast: [
    { day: 'Mon', condition: 'Sunny', high: 32, low: 24, icon: '☀️' },
    { day: 'Tue', condition: 'Partly Cloudy', high: 30, low: 22, icon: '⛅' },
    { day: 'Wed', condition: 'Cloudy', high: 28, low: 21, icon: '☁️' },
    { day: 'Thu', condition: 'Rainy', high: 25, low: 20, icon: '🌧️' },
    { day: 'Fri', condition: 'Thunderstorm', high: 26, low: 19, icon: '⛈️' },
  ],
};

// Usage data - daily for the current month
export const dailyUsageData = {
  labels: Array.from({ length: 30 }, (_, i) => i + 1), // 1-30 days
  datasets: [
    {
      label: 'Units Used',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 5), // 5-15 units
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
    },
  ],
};

// Monthly usage data for the current year
export const monthlyUsageData = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  datasets: [
    {
      label: 'Units Used',
      data: [
        180, 160, 150, 170, 190, 210, 
        230, 250, 220, 200, 190, 180
      ],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
    },
  ],
};

// Yearly usage data for the past 5 years
export const yearlyUsageData = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Units Used',
      data: [2200, 2100, 2300, 2150, 2050],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
    },
  ],
};

// Billing data
export const billingHistory = [
  {
    id: 'BILL-24-06',
    month: 'June 2024',
    periodStart: '2024-06-01',
    periodEnd: '2024-06-30',
    unitsUsed: 210,
    amount: 147.00,
    status: 'Pending',
    dueDate: '2024-07-15',
  },
  {
    id: 'BILL-24-05',
    month: 'May 2024',
    periodStart: '2024-05-01',
    periodEnd: '2024-05-31',
    unitsUsed: 190,
    amount: 133.00,
    status: 'Paid',
    dueDate: '2024-06-15',
    paidDate: '2024-06-10',
  },
  {
    id: 'BILL-24-04',
    month: 'April 2024',
    periodStart: '2024-04-01',
    periodEnd: '2024-04-30',
    unitsUsed: 170,
    amount: 119.00,
    status: 'Paid',
    dueDate: '2024-05-15',
    paidDate: '2024-05-12',
  },
  {
    id: 'BILL-24-03',
    month: 'March 2024',
    periodStart: '2024-03-01',
    periodEnd: '2024-03-31',
    unitsUsed: 150,
    amount: 105.00,
    status: 'Paid',
    dueDate: '2024-04-15',
    paidDate: '2024-04-10',
  },
  {
    id: 'BILL-24-02',
    month: 'February 2024',
    periodStart: '2024-02-01',
    periodEnd: '2024-02-29',
    unitsUsed: 160,
    amount: 112.00,
    status: 'Paid',
    dueDate: '2024-03-15',
    paidDate: '2024-03-08',
  },
  {
    id: 'BILL-24-01',
    month: 'January 2024',
    periodStart: '2024-01-01',
    periodEnd: '2024-01-31',
    unitsUsed: 180,
    amount: 126.00,
    status: 'Paid',
    dueDate: '2024-02-15',
    paidDate: '2024-02-10',
  },
];

// Energy tips based on weather
export const energyTips = {
  hot: [
    {
      id: 'hot-1',
      tip: 'Set your AC to 26°C instead of 22°C to save up to 20% on cooling costs',
      icon: '❄️',
    },
    {
      id: 'hot-2',
      tip: 'Use ceiling fans along with AC to distribute cool air more efficiently',
      icon: '🌀',
    },
    {
      id: 'hot-3',
      tip: 'Close blinds and curtains during the day to block heat from sunlight',
      icon: '🪟',
    },
    {
      id: 'hot-4',
      tip: 'Avoid using heat-generating appliances during peak afternoon hours',
      icon: '⏱️',
    },
  ],
  cold: [
    {
      id: 'cold-1',
      tip: 'Seal windows and doors to prevent heat from escaping',
      icon: '🚪',
    },
    {
      id: 'cold-2',
      tip: 'Use a programmable thermostat to lower heat when you\'re away or sleeping',
      icon: '🌡️',
    },
    {
      id: 'cold-3',
      tip: 'Open curtains during the day to let in sunlight and close them at night to trap heat',
      icon: '☀️',
    },
    {
      id: 'cold-4',
      tip: 'Use draft stoppers at the bottom of doors to prevent cold air from entering',
      icon: '❄️',
    },
  ],
  rainy: [
    {
      id: 'rainy-1',
      tip: 'Avoid using high-powered dryers for clothes; let them air dry when possible',
      icon: '👕',
    },
    {
      id: 'rainy-2',
      tip: 'Make sure electronic devices are plugged into surge protectors during storms',
      icon: '⚡',
    },
    {
      id: 'rainy-3',
      tip: 'Use LED lights during darker rainy days as they consume less energy',
      icon: '💡',
    },
    {
      id: 'rainy-4',
      tip: 'Turn off and unplug appliances during lightning storms to prevent damage',
      icon: '🔌',
    },
  ],
  normal: [
    {
      id: 'normal-1',
      tip: 'Unplug devices when not in use to avoid phantom energy usage',
      icon: '📱',
    },
    {
      id: 'normal-2',
      tip: 'Replace old appliances with energy-efficient models',
      icon: '♻️',
    },
    {
      id: 'normal-3',
      tip: 'Use natural light whenever possible instead of artificial lighting',
      icon: '🔆',
    },
    {
      id: 'normal-4',
      tip: 'Run full loads in washing machines and dishwashers to maximize efficiency',
      icon: '🧼',
    },
  ],
};

// FAQ data
export const faqData = [
  {
    id: 'faq-1',
    question: 'How is my electricity bill calculated?',
    answer: 'Your bill is calculated based on the number of units (kWh) consumed during the billing period, multiplied by the rate per unit. Additional charges may include service fees, taxes, and any applicable surcharges.',
  },
  {
    id: 'faq-2',
    question: 'What causes sudden spikes in electricity usage?',
    answer: 'Sudden spikes can be caused by seasonal changes (heating/cooling), adding new appliances, faulty equipment, or changes in usage patterns. Our system can help you identify these anomalies.',
  },
  {
    id: 'faq-3',
    question: 'How can I reduce my electricity bill?',
    answer: 'You can reduce your bill by following our personalized energy-saving tips, using energy-efficient appliances, optimizing usage during off-peak hours, and being mindful of phantom power usage from devices on standby.',
  },
  {
    id: 'faq-4',
    question: 'What is the best temperature setting for air conditioners?',
    answer: 'For optimal energy efficiency, set your AC to 24-26°C (75-78°F). Each degree lower can increase energy consumption by 3-5%. Using ceiling fans alongside AC can help maintain comfort at higher temperature settings.',
  },
  {
    id: 'faq-5',
    question: 'How accurate is the unit tracking system?',
    answer: 'Our tracking system is designed to provide accurate readings within 1% of your actual meter. The data is updated in real-time to give you the most current information about your electricity usage.',
  },
];

// Admin dashboard data - mock users
export const mockUsers = [
  {
    id: 'USR12345',
    name: 'John Doe',
    meterID: 'MTR-98765',
    address: '123 Energy St, Powertown',
    lastBill: {
      month: 'June 2024',
      unitsUsed: 210,
      amount: 147.00,
      status: 'Pending',
    },
    usagePattern: 'High',
  },
  {
    id: 'USR12346',
    name: 'Jane Smith',
    meterID: 'MTR-98766',
    address: '456 Power Ave, Electricville',
    lastBill: {
      month: 'June 2024',
      unitsUsed: 180,
      amount: 126.00,
      status: 'Paid',
    },
    usagePattern: 'Medium',
  },
  {
    id: 'USR12347',
    name: 'Robert Johnson',
    meterID: 'MTR-98767',
    address: '789 Circuit Blvd, Voltcity',
    lastBill: {
      month: 'June 2024',
      unitsUsed: 230,
      amount: 161.00,
      status: 'Overdue',
    },
    usagePattern: 'High',
  },
  {
    id: 'USR12348',
    name: 'Sarah Williams',
    meterID: 'MTR-98768',
    address: '101 Amp Lane, Currenttown',
    lastBill: {
      month: 'June 2024',
      unitsUsed: 150,
      amount: 105.00,
      status: 'Paid',
    },
    usagePattern: 'Low',
  },
  {
    id: 'USR12349',
    name: 'Michael Brown',
    meterID: 'MTR-98769',
    address: '202 Watt Street, Powerdale',
    lastBill: {
      month: 'June 2024',
      unitsUsed: 195,
      amount: 136.50,
      status: 'Pending',
    },
    usagePattern: 'Medium',
  },
  {
    id: 'USR12350',
    name: 'Emma Davis',
    meterID: 'MTR-98770',
    address: '303 Volt Drive, Energyville',
    lastBill: {
      month: 'June 2024',
      unitsUsed: 120,
      amount: 84.00,
      status: 'Paid',
    },
    usagePattern: 'Low',
  },
];

// Overall usage data for admin dashboard
export const overallUsageData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Residential',
      data: [2100, 1900, 2000, 2200, 2300, 2500],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
    },
    {
      label: 'Commercial',
      data: [3200, 3100, 3300, 3400, 3600, 3800],
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
      borderColor: 'rgba(16, 185, 129, 1)',
      borderWidth: 1,
    },
    {
      label: 'Industrial',
      data: [5000, 4800, 5200, 5100, 5400, 5600],
      backgroundColor: 'rgba(245, 158, 11, 0.5)',
      borderColor: 'rgba(245, 158, 11, 1)',
      borderWidth: 1,
    },
  ],
};