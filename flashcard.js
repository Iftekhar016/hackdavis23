const API_key = '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';
const paperSummary = `A Precis of Kennedy et al.'s Changing Metabolism of Cities

In the paper “Changing Metabolism of Cities” by Kennedy et al., the authors conduct a literature review to
analyze previous urban metabolism studies. They examine resource flows in various cities around the
world to identify critical processes and patterns in urban metabolism. This information is used to assess
the overall development trends of a city, including changes in water usage, material usage, nutrient flow,
and energy sources. The authors argue for the need for sustainable development models to ensure that
cities can develop without harming the environment or compromising future generations’ ability to meet
their needs.

The paper describes water as the largest component of urban metabolism. Per capita water use has
generally increased since the 1970s, and over-exploitation of groundwater can lead to subsidence,
pollution, and other problems. Achieving equilibrium in water resource management is important to ensure
the sustainability of urban areas. The significance of material inputs and outputs in urban environments is
also discussed, although data on the inputs is often lacking compared to other components such as
water. Cities are becoming increasingly material-intensive, with per capita use of construction materials
and domestic material consumption on the rise. Data on solid waste outputs show an upward trend, and
transportation of materials over increasingly long distances into cities also impacts sustainability by
increasing the amount of carbon emissions.

The quantification of urban energy fluxes and its role in urban metabolism is another factor discussed in
the paper. The authors compare per capita energy consumption of several cities. A research study by
Newman and Kenworthy describes how per capita transportation energy consumption is inversely
proportional to urban population density®. The urban heat island effect is also discussed, which describes
how pavement-ridden urban areas have higher relative air temperatures compared to more rural areas.
Increasing temperatures have the potential to increase energy usage towards cooling, especially in the
summer, which can create a negative feedback loop. Increased energy usage also impacts air pollution,
as more carbon emissions are created due to energy demands. This, in turn, increases temperatures
further due to the greenhouse gas effects.

Lastly, the paper discusses nutrient flow through urban systems and the consequences of improper
management strategies. Improper management can lead to eutrophication of water bodies, groundwater
pollution, and the release of heavy metals. Urban areas receive about 90% of their nitrogen and
phosphorus from human activities, and combustion processes are increasingly linked to nitrogen
emissions. Nutrient storage must also be considered, as accumulation can lead to negative environmental
consequences, such as seeping into groundwater, polluting it. Fertility exchange, where urban sewage is
returned to local farmland, is suggested for sustainable urban-nutrient management. However, challenges
such as transportation and pharmaceuticals in wastewater make other resource recovery alternatives
more attractive.

Overall, this paper provides a comprehensive review of urban metabolism and its application in
understanding resource flows within cities. By analyzing resource flows and metabolism of eight cities
worldwide, the authors provide insights into the complex interactions between urbanization, resource use,
and environmental impacts. The paper emphasizes the growing ecological footprint of cities and the need
for more efficient resource use and management to mitigate the impacts of higher resource use. However,
the authors acknowledge that more research is needed to fully understand urban metabolism and the role
of human behavior in shaping resource use patterns. Further studies can help policymakers and urban
planners develop effective and sustainable strategies to manage urban metabolism and mitigate the
negative impacts of higher resource use.

Transportation is a crucial factor that impacts urban metabolism and resource consumption. The
infrastructure of urban metabolism distributes resources to residents using various transportation modes.
Although the infrastructure and people in cities are often seen as separate systems, they need to be
recognized as co-dependent because they influence one another®. Encouraging the use of public transit,
cycling, and walking instead of driving a car can reduce transportation-related energy consumption and
carbon emissions®. Moreover, government policies, such as providing subsidies for resource-intensive
industries and implementing urban development strategies like complete street planning and mixed use
land development, can also influence transport use patterns by shaping human behavior®.
Works Cited`;
async function fetchData() {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Your responses will be in the format 'Front:', 'Back:' , where you put the necessary information after the colons . Give me a list of 10 flashcards on the following information: "+ paperSummary,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const text = data.choices[0].text;
    console.log(text);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();
