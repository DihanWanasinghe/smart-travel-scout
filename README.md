
---

## AI Reflection

### 1. The "Under the Hood" Moment: Describe one specific technical hurdle you faced while connecting the AI API to your frontend. How did you debug it?
One major technical hurdle was the initial model - gemini 1.5, I had  planned to use for this project . Whenever a search query was made it returned an error saying that the model rate limit was reached , but the rate limit itslef was 0 . which was weird . So for debugging I looked into the doucmentation of gemini rate limits availabe on Google AI Studio and found that the rate limits are different for different models and some models are deprecated . The issue was fixed after I change the model into gemini-2.5-flash. A light weight model that is currently available with high rate limits ideal for this project .

### 2. The Scalability Thought: If we had 50,000 travel packages instead of 5, how would you change your approach to ensure the AI doesn’t get confused or too expensive to run?
I would use a RAG(Retrieval-Augmented Generation (RAG)) approach if the records were to be increased to 50,000 . but this would be an overkill for the current project with  5 records of knowledge base .
Basic tools I would use for this approach are embedding model , vector database and a LLM . 
  1. First chunk the knowledge base and send them to an embedding model(Gemini embeddings, nomic-embed-text) to get the vector embeddings .
  2. Then store the vector embeddings in a vector database(ChromaDB , Supabase -pgvector) .
  3. When a search query comes , I would first embed it and use the vector database to find the most similar items (top -k items) .
  4. Finally attach the selected  items from the previous step to  the prompt with the search query and the basic instructions and send it to the LLM to generate a response .

The main reason I would use the RAG approach in this case comapred to going with the current approach is as following,
  1. Currently I attach every  record to the prompt, because it is only 5 records . 
  2. But if the records were to be increased to 50,000 , it would be too much to attach every record to the prompt , which would make the prompt too long and the LLM would get confused and the response would be too expensive to generate .

Beacuse of this Rag helps in only selecting the most relevant records to the prompt - user's search query , which makes the prompt shorter compared to attaching all the 50 000 records . 

As of other note,
If this RAG approach needs to be followed  , I would need to use another API service like Gemini Embeddings API to get the vector embeddings of the knowledge base and the user's query , instead of running a local embedding model like nomic-embed-text with Ollama tool. This is because Ollama needed to be continuously run on the deployed environment to  embed search queries , which is not possible on Vercel as it is serverless . 


### 3. The AI Reflection: Which AI tool (ChatGPT, Cursor, Copilot, etc.) did you use to help build this? Share one instance where the AI gave you a bad or buggy suggestion and how you corrected it.

I mainly use Antigravity as the IDE for this project and Google Stitch for design . 
One instance of a bad suggestion would be on the model it initially suggested me to use as the LLM . It suggested me to use gemini 1.5 as the LLM for this project . Which is not availabe for free tier because it is deprecated . To correct this I initially had to run the project , identify the issue with error logs and read the documentation regarding the available models and their rate limits , then change the model to gemini-2.5-flash . 