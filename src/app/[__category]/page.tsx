import Card from "@/components/Cards/Category/Card";
import _404 from "@/components/Errors/_404";
import React from "react";

type CategoryPageProps = {
  params: { __category: "works" | "blogs" };
};

const CategoryPage = ({ params }: CategoryPageProps) => {
  const categoryName = params?.__category;
  const isCorrectCategory =
    categoryName === "works" || categoryName === "blogs";

  if (!isCorrectCategory) {
    return <_404 />;
  }

  return (
    <div className="px-10">
      <h2 className="px-10 md:pb-5 pb-5 pt-10 text-3xl md:text-4xl font-[400]">
        My {categoryName === "works" ? "Creations" : "Blogs"}
      </h2>
      <div className="w-full  md:p-10 grid gap-10 grid-cols-1 xl:grid-cols-2">
        <Card
          path="/"
          image="/images/attendee.png"
          title="Attendee 3.0"
          subheading1="College's"
          subheading2="App"
          category={categoryName}
        />
        <Card
          path="/"
          image="/images/attendee.png"
          title="Attendee 3.0"
          subheading1="College's"
          subheading2="App"
          category={categoryName}
        />
        <Card
          path="/"
          image="/images/attendee.png"
          title="Attendee 3.0"
          subheading1="College's"
          subheading2="App"
          category={categoryName}
        />
        <Card
          path="/"
          image="/images/attendee.png"
          title="Navigating the digital landscape a comprehensive guide to full-stack development and ui/ux design"
          subheading1="College's"
          subheading2="App"
          category={categoryName}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
