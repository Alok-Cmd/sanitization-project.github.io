<?php

if(
  empty($_POST['namef2'])   ||
  empty($_POST['emailf2'])  ||
  empty($_POST['phonef2']))
  {
    echo "No arguments Provided!";
    return false;
  }

$product = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['productf2'])));

$name = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['namef2'])));
$email = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['emailf2'])));
$phone = rawurlencode(strip_tags(htmlspecialchars_decode("+91".$_POST['phonef2'])));

$state = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['statef2'])));
$org = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['orgf2'])));
$req = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['reqf2'])));

$qs = strip_tags(htmlspecialchars_decode($_POST['qsf2']));
$formid = "FormProductModal";

$formq = "name=".$name."&email=".$email."&phone=".$phone."&state=".$state."&org=".$org."&req=".$req."&product=".$product."&formid=".$formid."&".$qs;

$link = "https://hook.integromat.com/36isgjg4okkkh2fc7xfsnhpl6ak9tikw/?";

$flowq = $link.$formq;

function flowtrig($flowq)
{
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $flowq);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, 1);
  $response = curl_exec($ch);
  curl_close($ch);

  if(strpos( $response, "Accepted" ) !== false)
  {
    header('Location: ./thank-you.php');
    exit();
  }
  else
  {
    header('Location: ./form-submit-failed.php');
    exit();
  }
}
flowtrig($flowq);

?>