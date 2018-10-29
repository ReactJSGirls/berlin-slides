import React from 'react'

export default ({ image, name, talk }) => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
      }}
    >
      <div>
        <img
          style={{
            width: 150,
            borderRadius: '50%',
            marginRight: 20,
            marginTop: 30
          }}
          src={image}
          alt={name}
        />
        <h2>{name}</h2>
      </div>
      <p>{talk} </p>
    </section>
  )
}
