import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogdata.find((post) => post.id === parseInt(id));

  if (!post) return <p>Loading...</p>; // Handle cases where post data is not available

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title={post.title} /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              {post.video ? (
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={post.video}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={post.title}
                  ></iframe>
                </div>
              ) : (
                <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
              )}
            </div>
            <div className='desc'>
              <TitleSm title='Phasellus at magna - elit tristique lacinia. Integer a justo vitae arcu fermentum consequat.' />
              <p className="desc-p">{post.content2}</p>
              <p className='desc-p'>
                Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper. Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.
              </p>
              <p className='desc-p'>Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.</p>
              <p className='desc-p'>Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='Integer a justo vitae arcu fermentum...' />
              <p className="desc-p">{post.content1}</p>
              <p className='desc-p'>
                Phasellus nec tempor neque. In nec finibus lorem, in aliquet risus. Proin elit elit, cursus vel vulputate at, volutpat quis metus. Praesent at blandit tellus.
              </p>
              <p className='desc-p'>
                Morbi finibus velit erat, a pulvinar lacus mollis sit amet. Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper! Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.
              </p>
              <p className='desc-p'>Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.</p>
              <p className='desc-p'>Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;

// import { blogdata } from "@/assets/data/dummydata"
// import Banner from "@/components/Banner"
// import { Title, TitleSm } from "@/components/common/Title"
// import Head from "next/head"
// import { useRouter } from "next/router"
// import React from "react"

// const SinglePost = () => {
//   const router = useRouter()
//   const { id } = router.query
//   const post = blogdata.find((post) => post.id === parseInt(id))

//   return (
//     <>
//       <Head>
//         <title>{post.title}</title>
//       </Head>
//       <section className='post-details'>
//         <div className='container'>
//           <div className='heading-title'>
//             <TitleSm title={post.title} /> <br />
//             <br />
//             <Title title={post.title} className='title-bg' />
//             <div className='img py'>
//               <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
//             </div>
//             <div className='desc'>
//               <TitleSm title='Phasellus at magna - elit tristique lacinia. Integer a justo vitae arcu fermentum consequat.' />
//               <p className="desc-p">{post.content2}</p>
//               <p className='desc-p'> Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper. Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
//               <p className='desc-p'>Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.</p>
//               <p className='desc-p'>Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
//             </div>
//           </div>
//           <Banner />

//           <div className='heading-title'>
//             <div className='desc'>
//               <TitleSm title='Integer a justo vitae arcu fermentum...' />
//               <p className="desc-p">{post.content1}</p>
//               <p className='desc-p'> Phasellus nec tempor neque. In nec finibus lorem, in aliquet risus. Proin elit elit, cursus vel vulputate at, volutpat quis metus. Praesent at blandit tellus.</p>
//               <p className='desc-p'>Morbi finibus velit erat, a pulvinar lacus mollis sit amet. Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper! Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
//               <p className='desc-p'>Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.</p>
//               <p className='desc-p'>Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default SinglePost

