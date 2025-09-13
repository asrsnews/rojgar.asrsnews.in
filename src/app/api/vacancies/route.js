import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const vacancies = await db
      .collection("vacancies")
      .find({})
      .sort({ date: -1 })
      .toArray();
    return new Response(JSON.stringify(vacancies), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const data = await request.json();
    data.date = new Date();
    const result = await db.collection("vacancies").insertOne(data);
    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const result = await db
      .collection("vacancies")
      .deleteOne({ _id: new (require("mongodb").ObjectId)(id) });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function PATCH(request) {
  try {
    const { id, updates } = await request.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const result = await db
      .collection("vacancies")
      .updateOne(
        { _id: new (require("mongodb").ObjectId)(id) },
        { $set: updates }
      );
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
