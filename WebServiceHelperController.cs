﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
using System.Collections.Specialized;
using WebApplication3.Model;
using System.Collections;
using System.Linq;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    public class WebServiceHelperController:Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<LagerObjekt> getData()
        {
            string requestUrl = "https://localhost:44323/api/LagerObjekt";
            var request = (HttpWebRequest)WebRequest.Create(requestUrl);
            request.Method = "GET";
            request.UserAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36";
            request.AutomaticDecompression = DecompressionMethods.Deflate | DecompressionMethods.GZip;

            var response = (HttpWebResponse)request.GetResponse();
            string content = string.Empty;
            using (var stream = response.GetResponseStream())
            {
                using (var sr = new StreamReader(stream))
                {
                    content = sr.ReadToEnd();
                }
            }
            IList<LagerObjekt> liste = new List<LagerObjekt>();
            JArray a = JArray.Parse(content);

            for(int i = 0; i < a.Count; i++)
            {
                liste.Add(JsonConvert.DeserializeObject<LagerObjekt>(a[i].ToString()));
            }
            return liste;
        }


        [HttpPost("[action]")]
        public void postData([FromBody]object value)
        {
            JObject obj = JObject.Parse(value.ToString());
            string Bezeichnung = obj["Bezeichnung"].ToString();
            
            var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://localhost:44323/api/LagerObjekt");
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Method = "POST";

            using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
            {
                string json = "{\"Bezeichnung\":\""+ Bezeichnung + "\"}";

                streamWriter.Write(json);
            }

            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
            }
        }   
    }
}