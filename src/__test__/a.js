// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// import Result from '../components/results/Result';


// test('loads and displays the starting app',  () => {
   
//   const Data = {
  
//     results: [
//       {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//       {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//     ]}
//   render(<Result Data={Data}/>);
//   const result =   screen.getByTestId("result");
//   expect(result).toHaveTextContent('"results : "[ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ]');

// })

// test('URL value', async () => {
//     render(<App />);
//     const URL = await waitFor(() => screen.getByTestId("URL-value"));
//     // expect(URL).toHaveTextContent('https://fruit-api-301.herokuapp.com/getFruit');
// });

