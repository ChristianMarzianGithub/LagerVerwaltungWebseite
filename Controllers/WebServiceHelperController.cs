using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace LagerVerwaltungWebseite.Controllers
{
    [Route("api/[controller]")]
    public class WebServiceHelperController:Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<LagerObjekt> getDataLagerObjekt()
        {
            IList<LagerObjekt> liste = getDataLagerObjektListe<LagerObjekt>();
            return liste;
        }





        public IList<T> getDataLagerObjektListe<T>()
        {

            string requestUrl = "https://localhost:44323/api/" + typeof(T).Name;
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
            IList<T> liste = new List<T>();
            JArray a = JArray.Parse(content);

            for (int i = 0; i < a.Count; i++)
            {
                liste.Add(JsonConvert.DeserializeObject<T>(a[i].ToString()));
            }
            return liste;
        }

        [HttpGet("[action]")]
        public IEnumerable<Options> getDataOptionsLagerObjekt()
        {
            IList<LagerObjekt> listeLagerObjekt = getDataLagerObjektListe<LagerObjekt>();
            IList<Options> listeOptionsLagerObjekt = new List<Options>();
            for(int i = 0; i < listeLagerObjekt.Count; i++)
            {
                listeOptionsLagerObjekt.Add(
                    new Options
                    {
                        label = listeLagerObjekt[i].bezeichnung,
                        values = listeLagerObjekt[i].ID.ToString()
                    }
                );
            }
            return listeOptionsLagerObjekt;
        }

        [HttpGet("[action]")]
        public IEnumerable<Options> getDataOptionsLager()
        {
            
            IList<Lager> listeLager = getDataLagerObjektListe<Lager>();
            IList<Options> listeOptions = new List<Options>();
            
            for (int i = 0; i < listeLager.Count; i++)
            {
                listeOptions.Add(
                    new Options
                    {
                        label = listeLager[i].bezeichnung,
                        values = listeLager[i].id
                    }
                );
            }
            
            return listeOptions;
        }

        [HttpGet("[action]")]
        public IEnumerable<Options> getDataOptionsLagerArt()
        {

            IList<Lager> listeLager = getDataLagerObjektListe<Lager>();
            IList<Options> listeOptions = new List<Options>();

            for (int i = 0; i < listeLager.Count; i++)
            {
                listeOptions.Add(
                    new Options
                    {
                        label = listeLager[i].bezeichnung,
                        values = listeLager[i].id
                    }
                );
            }

            return listeOptions;
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