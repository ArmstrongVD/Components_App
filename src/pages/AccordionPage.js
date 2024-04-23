import Accordion from "../components/Accordion";




function AccordionPage() {
  const items = [
    {
      id:12,
      label: 'Label 1',
      content: 'Hello world'
    },
    { id:34,
      label: 'Label 2',
      content: 'Hello again'
    },
    { id:56,
      label: 'Label 3',
      content: 'Redundant'
    }
  ]

  return <div>
    
    <Accordion items={items}/>
    </div>

}

export default AccordionPage;