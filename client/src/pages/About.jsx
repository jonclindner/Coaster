
const About = () => {
  const stats = [
  { id: 1, name: 'Roller coasters in the World', value: '2,400+' },
  { id: 2, name: 'Different variations of roller coasters', value: '37' },
  { id: 3, name: 'First Roller Coaster was built in', value: '1817' },
  { id: 4, name: 'Average Coast to build a Roller Coaster', value: '$8M' },
]

  return (
    <div className="relative bg-white mt-24">
      <img
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src="https://camo.githubusercontent.com/877bc354d17c102a33dad61b62f4235208730c58a2961fa5d92454aff1675175/68747470733a2f2f617373657473332e746872696c6c6973742e636f6d2f76312f696d6167652f333133303639392f31323030783633302f666c617474656e3b63726f705f646f776e3b776562703d6175746f3b6a7065675f7175616c6974793d3730"
        alt=""
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-8 text-indigo-600">Our track record</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by thousands of people&nbsp;worldwide
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to advice the everyday citizen about the most popular amusement park rides all over the nation!
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About
