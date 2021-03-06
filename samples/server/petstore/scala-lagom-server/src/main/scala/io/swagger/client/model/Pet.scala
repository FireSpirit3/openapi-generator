/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package io.swagger.client.model
import play.api.libs.json._

case class Pet (
                  id: Option[Long],
                  category: Option[Category],
                  name: String,
                  photoUrls: Seq[String],
                  tags: Option[Seq[Tag]],
                  status:  Option[PetStatusEnum.PetStatusEnum]
)

object Pet {
implicit val format: Format[Pet] = Json.format
}

object PetStatusEnum extends Enumeration {
  val   available, pending, sold = Value
  type PetStatusEnum = Value
  implicit val format: Format[Value] = Format(Reads.enumNameReads(this), Writes.enumNameWrites[PetStatusEnum.type])
}
