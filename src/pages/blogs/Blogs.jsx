import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs")
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-sky-700 text-center mt-6 mb-2">
          Welcome to our blog
        </h1>
        <hr className="w-[40%] mx-auto mb-6 border-sky-700" />
        <div className="mx-32 mb-6">
          <h2 className="text-2xl  text-sky-500">
            <span className="text-sky-700 font-bold">a.</span> What is an access
            token and refresh token? How do they work and where should we store
            them on the client-side?
          </h2>
          <p>
            <span className="text-xl text-sky-700">Ans: </span>
            An access token is a security credential that is used to
            authenticate and authorize access to protected resources in an
            application. It is typically issued by an authentication server
            after successful authentication of a user or client application. The
            access token contains information about the user or client and their
            permissions, and it has a limited lifespan.
            <br />
            <br />A refresh token is also issued by the authentication server
            and is used to obtain a new access token when the current one
            expires. It provides a way to maintain a user's authenticated
            session without requiring them to re-enter their credentials. When
            the access token expires, the client can use the refresh token to
            request a new access token without requiring the user's involvement.
            On the client-side, access tokens and refresh tokens should be
            stored securely to prevent unauthorized access. They should not be
            stored in plain text or in client-side storage mechanisms that are
            easily accessible, such as local storage or cookies. Instead, they
            should be stored in more secure options, such as in memory or
            encrypted storage, and transmitted securely over HTTPS to protect
            them from interception or tampering.
          </p>
        </div>
        <div className="mx-32 mb-6">
          <h2 className="text-2xl  text-sky-500">
            <span className="text-sky-700 font-bold">b.</span> Compare SQL and
            NoSQL databases?
          </h2>
          <p>
            <span className="text-xl text-sky-700">Ans: </span>
            SQL databases are relational databases that use structured query
            language (SQL) for defining and manipulating the data. They have
            predefined schemas and provide strong consistency, ACID (Atomicity,
            Consistency, Isolation, Durability) properties, and support for
            complex queries. However, scaling and handling large amounts of data
            can be challenging. NoSQL databases, on the other hand, are
            non-relational databases that provide flexible schemas and do not
            require SQL for querying. They are designed for scalability and can
            handle large volumes of data across distributed systems. NoSQL
            databases offer eventual consistency, high availability, and
            horizontal scalability, but they may sacrifice some ACID properties
            and complex querying capabilities.
          </p>
        </div>
        <div className="mx-32 mb-6">
          <h2 className="text-2xl  text-sky-500">
            <span className="text-sky-700 font-bold">c.</span>What is express
            js? What is Nest JS?
          </h2>
          <p>
            <span className="text-xl text-sky-700">Ans:</span>
            Express.js is a popular web application framework for Node.js that
            simplifies the development of server-side applications. It provides
            a minimalist and flexible approach, allowing developers to build
            APIs and web applications quickly. Express.js offers various
            features such as routing, middleware support, and a vast ecosystem
            of plugins and extensions. It is known for its simplicity,
            lightweight nature, and ease of use.
            <br />
            <br />
            NestJS, on the other hand, is a progressive and extensible framework
            for building scalable and maintainable server-side applications in
            Node.js. It is inspired by Angular's architectural patterns and uses
            TypeScript as its primary language. NestJS emphasizes modularity,
            dependency injection, and strong typing. It provides a structured
            and opinionated framework that simplifies the development of complex
            applications while leveraging the power of TypeScript and the vast
            Node.js ecosystem. NestJS supports features like routing,
            middleware, decorators, and modules, making it suitable for
            enterprise-level applications.
          </p>
        </div>
        <div className="mx-32 mb-6">
          <h2 className="text-2xl  text-sky-500">
            <span className="text-sky-700 font-bold">d.</span> What is MongoDB
            aggregate and how does it work?
          </h2>
          <p>
            <span className="text-xl text-sky-700">Ans:</span>MongoDB's
            aggregate is a powerful framework used for data aggregation and
            processing in MongoDB. It allows for the execution of complex
            queries and transformations on collections of documents. Aggregation
            operations in MongoDB can perform tasks such as grouping, filtering,
            sorting, joining, and calculating aggregate values based on various
            criteria. The aggregation pipeline is at the core of MongoDB's
            aggregate framework. It consists of multiple stages that process and
            transform documents as they pass through. Each stage performs a
            specific operation on the documents, and the output of one stage
            serves as the input for the next stage in the pipeline. The stages
            can include operations like $match (filtering documents), $group
            (grouping documents), $sort (sorting documents), $project (reshaping
            and selecting fields), and many more. The aggregation pipeline
            allows for the construction of complex queries by combining multiple
            stages to achieve the desired result. It enables data
            transformation, summarization, and analysis in a highly flexible and
            efficient manner, leveraging the power of MongoDB's
            document-oriented data model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
