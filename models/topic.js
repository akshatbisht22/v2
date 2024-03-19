import mongoose , {Schema} from "mongoose";

const topicSchema = new Schema(
    {
        proj_name : String,
        proj_desc : String,
        proj_link : String,
    }
)

const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema);

export default Topic;