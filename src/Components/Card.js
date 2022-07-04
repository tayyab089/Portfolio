import { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

export default function CardComponent({
  title,
  image,
  description,
  destination,
  width,
  code,
}) {
  return (
    <Fragment>
      <Card
        hoverable
        // style={{ width: '30vw', backgroundColor: '#f7f6f2'}}
        className= 'Card'
        cover={<img className = 'Card-Image' alt="example" src={image} />}
      >
       {/* <Link
          to={destination}
          style={{ textDecoration: 'inherit', color: 'inherit' }}
        >
        </Link> */}
        <div className='Heading-Box'>
            <h1 className='Card-Title'>{title}</h1>
            <p className='Card-Description'>{description}</p>
        </div>
        <div className='Link-Box'>
            <a className='Links' href={code} target = '_blank'>Source Code</a>
            <p className='Links'>Preview</p>
        </div>

      {/* <Meta title= {title} description={description} /> */}
    </Card>
    </Fragment>
  );
}