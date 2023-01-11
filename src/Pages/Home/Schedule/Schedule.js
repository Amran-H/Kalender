import React, { useState } from "react";

const Schedule = () => {
  const [scroll, setScroll] = useState(1);
  return (
    <div className="flex">
      <h1 className="text-5xl">Length:{scroll}</h1>
      <div className="h-64 w-48">
        <div onScroll={() => setScroll(2)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          fugit non dolorum praesentium aliquam, rerum harum officiis, ut
          dignissimos quod corrupti, totam illo. Labore, sequi tempore deleniti,
          ad facilis harum expedita officiis neque dicta aspernatur, ab ipsum?
          Asperiores obcaecati voluptatem quod harum aperiam consequuntur rerum
          ipsa aspernatur minima quisquam aut, dolorum delectus assumenda
          tempore nostrum optio incidunt? Commodi voluptatem recusandae
          repudiandae debitis iusto dolorem possimus blanditiis laudantium
          doloribus odit, porro maiores nemo ab corporis. Cumque, aperiam.
          Recusandae repellendus sed velit. Suscipit odio quaerat, quod repellat
          delectus tempore vitae sed provident nihil enim aliquam blanditiis,
          facilis possimus iusto labore excepturi necessitatibus!
        </div>
        <br />
        <div onScroll={() => setScroll(3)}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
          praesentium nulla earum quaerat non quidem quod enim amet distinctio,
          cupiditate architecto, quibusdam error assumenda facilis laborum,
          natus recusandae? Accusamus repellendus impedit voluptates reiciendis
          quo omnis eius magnam deserunt quis veniam, esse illum similique
          architecto delectus inventore est eos a sit asperiores? Labore quaerat
          in repudiandae ea voluptas a saepe velit cupiditate voluptatem? Sunt
          repudiandae laudantium, totam sint illum esse placeat, quaerat
          temporibus dicta, modi id quo dolorem nulla excepturi quisquam at?
          Reprehenderit nobis optio iusto sequi dicta, nostrum quasi consequatur
          molestiae nulla odit totam ipsam nisi earum, adipisci deserunt amet.
        </div>
      </div>
    </div>
  );
};

export default Schedule;
