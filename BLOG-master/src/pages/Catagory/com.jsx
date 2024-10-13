import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router";

function ForumComponent() {
  const context = useContext(myContext);
  const { mode } = context;

  // Sample forum data based on the image you provided
  const forumPosts = [
    {
      id: 1,
      date: "16 Oct, 2024 ",
      title: "ทำไมไม่มีสัปดาห์อ่านหนังสือคะ",
      UID: "1234",
      description: "↳ ไม่มีอ่ะ ตีล่ะ เดี๋ยวชีวิตว่างเกิน\n↳ ไม่อยากซ้ำ มันไม่เก๋",
    },
    {
      id: 2,
      date: "16 Oct, 2024 ",
      title: "สวัสดีตอนเช้าครับ วันนี้ผมมีเรื่องอยากสอบถามพี่ๆทุกคน วันนี้ตอนเช้าพี่ๆกินข้าวกับอะไรกันครับ",
      UID: "4321",
      description: "↳ กินเจย์ อิ่มบุญสุดละ ครับ\n↳ วันนี้ เรากินข้าวกับผัดเผ็ดตุ๊กแก ค่ะ",
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          {/* Top Heading */}
          <div className="mb-5">
            
            <h1
              className="text-center text-3xl font-bold"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              คอมพิวเตอร์
            </h1>
          </div>
          {/* Main Content */}
          <div className="flex flex-col justify-center mb-5">
            {/* Forum Posts */}
            {forumPosts.length > 0 ? (
              <>
                {forumPosts.map((post) => (
                  <div className="mb-4" key={post.id}>
                    {/* Top Items */}
                    <div className="p-6 border rounded-lg shadow-md">
                      {/* Blog Date */}
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{
                          color: mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                        }}
                      >
                        {post.UID}    {post.date}
                      </h2>

                      {/* Blog Title */}
                      <h1
                        className="title-font text-lg font-bold text-gray-900 mb-3"
                        style={{
                          color: mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                        }}
                      >
                        {post.title}
                      </h1>

                      {/* Blog Description */}
                      <p
                        className="leading-relaxed mb-3"
                        style={{
                          color: mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                          lineHeight: '1.6', // Increase line height for better readability
                          whiteSpace: 'pre-line', // Preserve line breaks in description
                        }}
                      >
                        {post.description}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1 className="text-xl font-bold">Not Found</h1>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ForumComponent;
